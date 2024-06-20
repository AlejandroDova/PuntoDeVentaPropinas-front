import DividirPropinas from "./DividirPropinas";
import EditarPropinas from "./EditarPropinas";
import MetodoPagos from "./MetodoPagos";

export default function MainPropinas() {
    return (
        <div>
            <EditarPropinas />
            <DividirPropinas />
            <MetodoPagos />
        </div>
    )
}
