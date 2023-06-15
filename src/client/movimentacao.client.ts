import axios, { AxiosInstance } from "axios";

import { Movimentacao } from "@/model/movimentacao";
import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

export class MovimentacaoClient {

    private axiosClient : AxiosInstance;

    constructor(){
        this.axiosClient = axios.create({
            baseURL: 'http://localhost:8080/api/movimentacao',
            headers: {'Content-type' : 'application/json'}
        });
    }

    public async findById(id : number) : Promise<Movimentacao> {
        try {
            return (await this.axiosClient.get<Movimentacao>(`/${id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async listAll() : Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/lista`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByAbertas() : Promise<Movimentacao[]> {
        try {
            return (await this.axiosClient.get<Movimentacao[]>(`/ativo`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(movimentacao : Movimentacao) : Promise<void> {
        try { 
            return (await this.axiosClient.post('/', movimentacao))
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(movimentacao : Movimentacao) : Promise<void> {
        try {
            return (await this.axiosClient.put(`/${movimentacao.id}`, movimentacao)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async fecharMovimentacao(movimentacao : Movimentacao) : Promise<void> {
        try { 
            return (await this.axiosClient.put(`/saida/${movimentacao.id}`, movimentacao)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(movimentacao : Movimentacao) : Promise<string> {
        try {
            return (await this.axiosClient.delete(`/${movimentacao.id}`)).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    public async findByFiltrosPaginado(pageRequest : PageRequest) : Promise<PageResponse<Movimentacao>> {
        try {
            let requestPath = ''

            requestPath += `?page=${pageRequest.currentPage}`
            requestPath += `&size=${pageRequest.pageSize}`
            requestPath += `&sort=${pageRequest.sortField === undefined ? '' : pageRequest.sortField}, ${pageRequest.direction}`
            
            return (await this.axiosClient.get<PageResponse<Movimentacao>>(requestPath, {params : {filtros : pageRequest.filter } })).data
        } catch (error : any) {
            return Promise.reject(error.response)
        }
    }

    
}