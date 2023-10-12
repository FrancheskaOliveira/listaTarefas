import React from 'react';

function FiltroBarra({ filtroTexto, setFiltroTexto }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Buscar tarefas"
                value={filtroTexto}
                onChange={(e) => setFiltroTexto(e.target.value)}
            />
        </div>
    );
}

export default FiltroBarra;