'use client'; 

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PegarId() {
    const router = useRouter();
    router.push(`/Atualizar?id_noticias=${id}`);

    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
          router.push(`/Atualizar?id_noticias=${id}`);
        }
      };

    return (
        <>
        <p>Insira o ID da noticia para ser redirecionado.</p>

        <form id="id" onSubmit={handleSubmit}>
            <label htmlFor="id">ID da noticia:</label>
            <input type="text" id="id" name="id" placeholder="Insira o ID da noticia" value={id} onChange={(e) => (e.target.value)}/>
            <button type="submit">Enviar ID</button>
        </form>
        </>
    )
}