import { PrinterReservationPlan } from '../PrinterReservation/model/PrinterReservationPlan'
import { sigmaAxios } from './SigmaAxios'
import { lightFormat, parseISO } from 'date-fns'

type ServerPrinterReservationPlan = {
    id: number
    authorName: string
    startTime: string
    endTime: string
    printerId: '0' | '1'
    contents: string
}

export const PrinterAPI = {
    getReservations: async (): Promise<Array<PrinterReservationPlan>> => {
        return sigmaAxios.get('/printer/').then(({ data }) =>
            (
                data as Array<ServerPrinterReservationPlan>
            ).map<PrinterReservationPlan>((plan) => {
                const {
                    id,
                    authorName,
                    startTime,
                    endTime,
                    printerId,
                    contents,
                } = plan
                return {
                    id: id.toString(),
                    authorName,
                    start: parseISO(startTime),
                    end: parseISO(endTime),
                    printerId: printerId === '0' ? 'printerOne' : 'printerTwo',
                    title: contents,
                }
            }),
        )
    },
    postReservation: async (
        reservation: Omit<PrinterReservationPlan, 'id'>,
    ): Promise<void> => {
        const { authorName, printerId, start, end, title } = reservation
        const data: Omit<ServerPrinterReservationPlan, 'id'> = {
            authorName,
            printerId: printerId === 'printerOne' ? '0' : '1',
            contents: title,
            startTime: lightFormat(start, 'yyyy-MM-dd HH:mm:ss'),
            endTime: lightFormat(end, 'yyyy-MM-dd HH:mm:ss'),
        }
        return sigmaAxios.post('/printer/', data)
    },
}
