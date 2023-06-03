export interface Image{
    id:string
    url: string;
}
export interface EventAttributes{
    id: string;
    eventName: string;
    eventDate: Date;
    eventLocation: string;
    eventDescription: string;
    eventImages: Image[];
    creatorId: string;
}