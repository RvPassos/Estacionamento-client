import axios, { AxiosInstance } from "axios";

import { Configuracao } from "@/model/configuracao";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class ConfiguracaoClient {
    
    private axiosClient : AxiosInstance

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/configuracao',
            headers: {'Content-Type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Configuracao> {
        try {
            return (await this.axiosClient.get<Configuracao>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(configuracao : Configuracao) : Promise<void> {
        try {
            return (await this.axiosClient.post('/', configuracao))
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(configuracao : Configuracao) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${configuracao.id}`, configuracao)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Configuracao>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`

            return (await this.axiosClient.get<PageResponse<Configuracao>>(requestPath, {params : {filtros : pageRequest.filter} })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        } 
    }
}