let nothing : never;
//nothing = undefined;


function getError(error : string) : never{
    throw new Error(error);
}

getError("Hi Saumya! Error Occured");