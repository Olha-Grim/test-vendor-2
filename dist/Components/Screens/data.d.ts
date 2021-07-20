export namespace user {
    const id: string;
    const short: string;
    const name: string;
    const email: string;
    const image: null;
    const teams: {
        id: number;
        image: null;
        label: string;
        short: string;
        isLeader: number;
        joinedAt: string;
    }[];
    namespace organization {
        const id_1: number;
        export { id_1 as id };
        const image_1: null;
        export { image_1 as image };
        export const label: string;
        const short_1: string;
        export { short_1 as short };
    }
    const organizations: {
        id: number;
        image: null;
        label: string;
        short: string;
        isOwner: number;
        joinedAt: string;
        position: null;
        isCurrent: number;
    }[];
    const apps: ({
        appId: string;
        name: string;
        short: string;
        image: string;
        category: string;
    } | {
        appId: string;
        name: string;
        short: string;
        image: null;
        category: string;
    } | {
        appId: string;
        name: string;
        short: null;
        image: null;
        category?: undefined;
    } | {
        appId: string;
        name: string;
        short: string;
        image: null;
        category?: undefined;
    } | {
        appId: string;
        name: string;
        short: string;
        image?: undefined;
        category?: undefined;
    } | {
        appId: string;
        name: string;
        short: null;
        image: null;
        category: string;
    })[];
    const __typename: string;
}
//# sourceMappingURL=data.d.ts.map