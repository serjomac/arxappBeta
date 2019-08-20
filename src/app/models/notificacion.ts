export interface Notificacion{
    id_visitante: string;    
    id_residente: string;       
    estado: boolean;
    invitacion_activa: boolean;
    fecha_ingreso: Date;
    fecha_salida: Date;
    name: string;
    lastname: string;   
    username: string;
    
}