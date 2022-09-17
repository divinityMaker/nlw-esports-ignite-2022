export interface GameParams{
    id: string;
    tittle: string;
    bannerURL: string;
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList{
            home: undefined;
            game: GameParams
        }
    }
}