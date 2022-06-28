import type {NextApiRequest, NextApiResponse} from 'next';
import { DefaultMsgResponse } from '../../types/DefaultMsgrespostas';


export default (req : NextApiRequest, res: NextApiResponse<DefaultMsgResponse>) => {
    if(req.method === 'POST') {

        const {login, password} = req.body;
        if (login === 'email@gmail.com' && 
            password === "123"){
                return res.status(200).json({msg: 'logado com sucesso!'});
        }
        else{
            return res.status(400).json({error: 'Erro ao logar'});
        }
    }
    return res.status(405).json({error: 'Método informado não é permitido!'});
}
