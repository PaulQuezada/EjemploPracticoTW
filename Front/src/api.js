import axios from 'axios'
const url="http://localhost:3000/api/"


export default class API{
    //LLAMADAS USUARIO
    static async login(data){
        try {
            const res = await axios.post(url+"login",data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async register(data){
        try {
            const res = await axios.post(url+"addusuario",data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async addModulo(data){
        try {
            const res = await axios.post(url+"addmodulo",data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async addParticipantes(data,id){
        try {
            const res = await axios.post(url + "addparticipantes/"+ id,data )
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async getMisModulos(id){
        try {
            const res = await axios.get(url + "getmoduloid/"+ id )
            return res.data
        } catch (error) {
            return error.response.data
        }
    }
    static async getUsuarioId(id){
        try {
            const res = await axios.get(url + "getusuarioid/"+ id )
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async addPlanillasByUsuario(data,id){
        try {
            const res = await axios.post(url + "addplanilla/"+ id,data )
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async getPlanillasByUsuario(id){
        try {
            let data=[]
            const res = await axios.get(url + "getplanillas/"+ id )
            res.data.forEach(planilla => {
                if(planilla.visible){
                    data.push(planilla)
                }
            });
            return data
        } catch (error) {
            return error.response.data
        }
    }

    static async getAllUsuario(){
        try {
            const res = await axios.get(url + "getallusuarios/")
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async editarPlantilla(id,data){
        try {
            const res = await axios.put(url + "putplanilla/"+id, data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async eliminarPlantilla(id){
        try {
            const res = await axios.put(url + "estadovisible/"+ id)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

}