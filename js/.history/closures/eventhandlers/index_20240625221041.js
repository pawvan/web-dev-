function addByclicking(){
    let count =0;
    document.getElementById('mybtn').addEventListener('click',function()
    {
        count++;
        
        document.querySelector(".count").innerText =count
        console.log(count)
    }
    )
}