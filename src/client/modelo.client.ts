import axios, { AxiosInstance } from "axios";

import { Modelo } from "@/model/modelo";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

class ModeloClient { 

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/modelo',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Modelo> { 
        try {
            return (await this.axiosClient.get<Modelo>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/lista`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivo() : Promise<Modelo[]> {
        try {
            return (await this.axiosClient.get<Modelo[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(modelo : Modelo) : Promise<string> {
        try {
            return (await this.axiosClient.post<string>('', modelo)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(id : Number, modelo : Modelo) : Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, modelo)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id : number) : Promise<void> {
        try {
            return (await this.axiosClient.delete(`/${id}`)).data
        } catch (error: any) {
            return Promise.reject(error. response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Modelo>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Modelo>>(requestPath, {params : {filtros : pageRequest.filter } })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }
    
}
export default new ModeloClient();