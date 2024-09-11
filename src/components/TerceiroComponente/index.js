import { useState } from 'react';

function TerceiroComponente() {
    const [pessoas, setPessoas] = useState([
        {
            id: 0,
            name: 'Alisson'
        },
        {
            id: 1,
            name: 'João'
        },
        {
            id: 2,
            name: 'Queila'
        },
        {
            id: 3,
            name: 'Maria'
        }
    ]);


    const RenderPessoas = () => {
        return pessoas.map(pessoa => {
            
            return(
                <tr key={pessoas.id}>
                    <td>{pessoa.id}</td>
                    <td>{pessoa.name}</td>
                </tr>
            )
        })
    }
  
    return(
        <table>
            <tr>
                <th>id</th>
                <th>nome</th>
            </tr>
            <RenderPessoas />
        </table>
    );
    }
    
    export default TerceiroComponente;