import axios, { AxiosInstance } from "axios";

import { Condutor } from "@/model/condutor";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

class CondutorClient {

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/condutor',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Condutor> {
        try {
            return (await this.axiosClient.get<Condutor>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/lista`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAtivo() : Promise<Condutor[]> {
        try {
            return (await this.axiosClient.get<Condutor[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(condutor : Condutor) : Promise<string> {
        try {
            return (await this.axiosClient.post<string>('', condutor)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }

    }

    public async editar(id : number, condutor : Condutor) : Promise<string> {
        try {
            return (await this.axiosClient.put<string>(`/${id}`, condutor)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id : number) : Promise<string> {
        try {
            return (await this.axiosClient.delete(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Condutor>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`
            
            return (await this.axiosClient.get<PageResponse<Condutor>>(requestPath, {params : {filtros : pageRequest.filter } })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    
    } 
}

export default new CondutorClient()