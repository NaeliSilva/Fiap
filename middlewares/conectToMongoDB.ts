import type { NextApiRequest, NextApiResponse, NextApiHandler } from "next";

import mongoose from "mongoose";
import { DefaultMsgResponse } from "../types/DefaultMsgrespostas";

export const connect = (handler: NextApiHandler) => async(
    req: NextApiRequest, res: NextApiResponse<DefaultMsgResponse>
    ) => {
        console.log('MongoDB readyState', mongoose.connections[0].readyState);
        if(mongoose.connections[0].readyState){
            return handler(req, res);
        }
        const DB_CONNECTIONS_STRING = 'mongodb://localhost:27017/87aoj-gerenciador-tarefas';

        mongoose.connection.on('connected', () => console.log('Conectando no banco de dados'));
        mongoose.connection.on('error', err => console.log('Erro ao conectar no banco de dados', err));

        await mongoose.connect(DB_CONNECTIONS_STRING);
    }