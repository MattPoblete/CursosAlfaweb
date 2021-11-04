<template>
    <div>
        <b-card
            :title="curso.data.nombre"
            :img-src="curso.data.imagen"
            img-alt="Imagen"
            img-top
            tag="article"
            style="max-width: 16rem; height: 70vh"
            class="m-2"
            sub-title="Información:"
        >
            <b-card-text>
                <b-list-group>
                    <b-list-group-item>{{curso.data.descripcion}}</b-list-group-item>
                    <b-list-group-item class="d-flex justify-content-between align-items-center">Duración: <span>{{curso.data.duracion}}</span></b-list-group-item>
                    <b-list-group-item class="d-flex justify-content-between align-items-center">Cupos: <b-badge pill variant="success">{{curso.data.cupos}}</b-badge></b-list-group-item>
                    <b-list-group-item class="d-flex justify-content-between align-items-center">Precio: <b-badge pill variant="success">${{curso.data.costo}}</b-badge></b-list-group-item>

                </b-list-group>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    props:['curso']
}
</script>