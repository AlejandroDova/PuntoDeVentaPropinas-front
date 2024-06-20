import { create } from 'zustand'

export interface Pago {
    monto: number
    tipoPago: number
}

export interface tipoPago {
    id: number
    nombre: string
    numero: number
}

export interface storearr {
    efectivoCaja: String
    totalPropinas: number
    totalPorPersona: number
    personasPropina: number
    personasRestantes: number
    numpad: string
    totalPagado: number
    restantePagar: number
    metodoPago: number
    pagos: Pago[]
    editfocus: number

    editarPropinas: () => void
    actualizarTotalPorPersona: () => void
    editarPersonasPropinas: () => void
    editarPersonasrestantes: (n: number) => void
    restarPersonasrestantes: (n: number) => void
    agregarNumPad: (char: string) => void
    eliminarNumPad: () => void
    agregarTotalPagado: (n: number) => void
    restarTotalPagado: (n: number) => void
    actualizarRestantePagar: () => void
    editNumberFocus: (n: number) => void
    editMetodoPago: (n: number) => void
    agregarPago: (pago: Pago) => void
}

export const useStorePropinas = create<storearr>()((set) => ({
    efectivoCaja: '5500',
    totalPropinas: 0,
    totalPorPersona: 0,
    personasPropina: 1,
    personasRestantes: 0,
    numpad: '',
    totalPagado: 0,
    restantePagar: 0,
    metodoPago: 0,
    pagos: [],
    editfocus: 0,
    editarPropinas: () => set((state) => ({ totalPropinas: +state.numpad, totalPagado: 0, restantePagar: +state.numpad, pagos: [] })),
    actualizarTotalPorPersona: () => set((state) => ({ totalPorPersona: state.totalPropinas / state.personasPropina })),
    editarPersonasPropinas: () => set((state) => ({ personasPropina: +state.numpad })),
    editarPersonasrestantes: (n) => set(() => ({ personasRestantes: n })),
    restarPersonasrestantes: (n) => set((state) => ({ personasRestantes: state.personasRestantes - n })),
    agregarNumPad: (char) => set((state) => ({ numpad: state.numpad + char })),
    eliminarNumPad: () => set(() => ({ numpad: '' })),
    agregarTotalPagado: (n) => set((state) => ({ totalPagado: state.totalPagado + n })),
    restarTotalPagado: (n) => set((state) => ({ totalPagado: state.totalPagado - n })),
    actualizarRestantePagar: () => set((state) => ({ restantePagar: state.totalPropinas - state.totalPagado })),
    editNumberFocus: (n) => set(() => ({ editfocus: n })),
    editMetodoPago: (n) => set(() => ({ metodoPago: n })),
    agregarPago: (pago) => set((state) => ({
        pagos:
            [...state.pagos,
            {
                monto: pago.monto,
                tipoPago: pago.tipoPago
            } as Pago
        ]
    }))
}))
