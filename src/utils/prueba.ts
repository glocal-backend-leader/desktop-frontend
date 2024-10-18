import { handleFind } from "@resources/index";
const endpoint = `${import.meta.env.API_URL}process-types`;

export const prueba = handleFind(endpoint)