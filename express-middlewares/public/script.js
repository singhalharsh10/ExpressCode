let t1 = document.getElementById('t1')
let encode = document.getElementById('encode')
let evaluate = document.getElementById('evaluate')
let code = document.getElementById('code')
let encrypt = document.getElementById('encrypt')

encode.onclick = function() {
    let data = t1.value
        // btoa is a function tat encodes our data into *64 base encoding scheme
    data = btoa(data)
    code.value = data
}

encrypt.onclick = function() {
    let data = code.value
    data = encryptData(data)
    code.value = data;

}


function encryptData(rawdata) {


    return 'XXXXX'
}