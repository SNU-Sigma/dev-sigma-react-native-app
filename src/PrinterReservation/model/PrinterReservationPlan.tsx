export type PrinterReservationPlan = {
    id: string
    title: string
    authorName: string
    printerId: 'printerOne' | 'printerTwo'
    start: Date
    end: Date
}
