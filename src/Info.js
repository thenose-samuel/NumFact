const Info = ({status, fact})=>{
    if(status === 0)
        return(
            <p>Enter a number in the field above</p>
        )
    else if(status === 1)
            return(
                <p>Loading fact</p>
            )
    else
            return(
                <p>{fact}</p>
            )
}
export default Info;