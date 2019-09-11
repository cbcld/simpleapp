export interface FileDetailsInterface {
    dataObject: any;
    fileTypeName: string;
    numberOfFiles: number;
    result: FileObjectDetailsInterface[];
    fileStats: FileStats;
}

export interface FileObjectDetailsInterface {
    objectId: number;
    objectName: string;
    objectType: string;
    createdOn: string;
    createdBy: string;
}

export interface FileStats {
    csv: number;
    json: number;
    xml: number;
    parquet: number;
    db: number;
}

export interface AttributeObject {
    attributeType: string;
    businessmeta: BusinessMetadata;
    dataLength: number;
    dataType: string;
    id: string;
    name: string;
    parentId: string;
    tags: any[];
    xpath: any;

}

export interface BusinessMetadata {
    comments: string;
    definition: string;
    primaryClassification: string;
    securityClassification: string;
    taxonomy: string;
}

export interface BusinessMetadataRequestObject {
    type: string;
    payload: Payload[];
}

export interface Payload {
    tag_name: string;
    tag_val: string;
}

export interface Response {
    message: string;
    status: string;
    results: any;
}
