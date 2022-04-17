import { parse, format } from 'date-fns';
import es from 'date-fns/locale/es/index.js';

export function formatDate(dateStr: string) {
  const date = parse(dateStr, 'yyyy-MM-dd', new Date());
  return format(date, "dd 'de' MMMM 'de' yyyy", { locale: es });
}
