import { parseISO, format } from 'date-fns';

export default function Date({ dateString }: any) {
    const date = parseISO(dateString);

    return <time dateTime={dateString}>{format(date, 'PP')}</time>
}