function mobileMeny(){
    let navMenyBtn = document.getElementById('MenyBtn');
    let mobileMeny = document.getElementById('MobileMeny');

    if( mobileMeny.style.display === 'none'){
        mobileMeny.style.display = 'flex';
    }
    else{
        mobileMeny.style.display = 'none';
    }
}