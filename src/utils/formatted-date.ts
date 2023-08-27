import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formattedDistance(date: string): string {
  const distance = formatDistance(new Date(), new Date(date), {
    addSuffix: false,
    locale: ptBR
  })

  return distance
}