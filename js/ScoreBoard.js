let aData = [];

const score = document.getElementById('score');
parseData=()=>{
    console.log('coucou')

    
for(let i =0;i<aData[0].length;i++){
    console.log(aData[0][i]);
    let  hitData = aData[0][i].hit.split(",");
    let otherHitData = aData[0][i].otherhit.split(",");
    const user = document.createElement('div');
    user.className="box";
    const username = document.createElement('p');
    username.id = i;
    username.className="user";
    username.innerText = `${aData[0][i].username} : ${aData[0][i].created_at}`;
    const hit = document.createElement('select');
    for(let i=0;i<hitData.length;i++){
        const optHit = document.createElement('option');
        optHit.innerText = hitData[i];
        hit.append(optHit);
    }
    const otherHit = document.createElement('select');

    for(let i=0;i<otherHitData.length;i++){
        const optHitOt = document.createElement('option');
        optHitOt.innerText = otherHitData[i];
        otherHit.append(optHitOt);
    }
    const victory = document.createElement('p');
    victory.innerText = aData[0][i].victory;

    user.append(username);
    user.append(victory)
    user.append(hit)
    user.append(otherHit)
    score.append(user)
}

}


xmlEp=()=>{

    
    const httpQuery = new XMLHttpRequest();

    httpQuery.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
           
            const data = JSON.parse(this.responseText)
            aData.push(data)
            parseData();

        
        }

    }
    httpQuery.open('GET',`data.php`, true );
    httpQuery.send();
  
    
}
xmlEp();