export interface IRegisterInput {
    name: "email" | "username" | "password",
    placeholder: string,
    type: string,
    validation: {
        required?: boolean;
        minLength?: number;
        pattern?: RegExp;
    };
}

export interface ILoginInput {
    name: "identifier" | "password";
    placeholder: string,
    type: string,
    validation: {
        required?: boolean;
        minLength?: number;
        pattern?: RegExp;
    };
}

export interface IErrorResponse {
    error: {
        details?: {
            errors: {
                message: string;
            }[];
        };
        message?: string;
    };
}

// export interface Data {
//     description:string
//     id: number;
//     price: number;
//     thumbnail: string;
//     title: string;
// }

// export interface IProduct {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: string;
//     rating: {
//         rate: number;
//         count: number;
//     };
// }

export interface IData {
    id: number;
    attributes: {
        title: string;
        description: string;
        price: number;
        stock: number;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        thumbnail: {
            data: {
                id: number;
                attributes: {
                    name: string;
                    alternativeText: string | null;
                    caption: string | null;
                    width: number;
                    height: number;
                    formats: {
                        thumbnail: {
                            name: string;
                            hash: string;
                            ext: string;
                            mime: string;
                            path: string | null;
                            width: number;
                            height: number;
                            size: number;
                            sizeInBytes: number;
                            url: string;
                        };
                        small: {
                            name: string;
                            hash: string;
                            ext: string;
                            mime: string;
                            path: string | null;
                            width: number;
                            height: number;
                            size: number;
                            sizeInBytes: number;
                            url: string;
                        };
                        medium: {
                            name: string;
                            hash: string;
                            ext: string;
                            mime: string;
                            path: string | null;
                            width: number;
                            height: number;
                            size: number;
                            sizeInBytes: number;
                            url: string;
                        };
                    };
                    hash: string;
                    ext: string;
                    mime: string;
                    size: number;
                    url: string;
                    previewUrl: string | null;
                    provider: string;
                    provider_metadata: null;
                    createdAt: string;
                    updatedAt: string;
                };
            };
        };
        category: {
            data: {
                id: number;
                attributes: {
                    title: string;
                    createdAt: string;
                    updatedAt: string;
                    publishedAt: string;
                };
            };
        };
    };
}


