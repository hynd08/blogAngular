import * as moment from 'moment';

export class Article {
    id: number;
    title: string;
    description: string;
    author: string;
    date: moment.Moment;

    constructor(id: number, title: string, description?: string,
        author: string = 'hynd') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.author = author;
        this.date = moment();

    }
}
