let mat =  [[1,2,3],
            [4,5,6],
            [7,8,9]] 

const rotate = () => {            

        temp = mat[0][1]
        mat[0][1] = mat[0][0]
        temp2 = mat[0][2]
        mat[0][2] = temp
        temp = mat[1][2]
        mat[1][2] = temp2
        temp2 = mat[2][2]
        mat[2][2] = temp
        temp = mat[2][1]
        mat[2][1] = temp2
        temp2 = mat[2][0]
        mat[2][0] = temp
        temp = mat[1][0]
        mat[1][0] = temp2
        temp2 = mat[0][0]
        mat[0][0] = temp 


        for(var i =0; i<3; i++){
            for (var j=0; j<3; j++){
                console.log(`btn${mat[i][j]}`)
                document.getElementById(`btn${mat[i][j]}`).style['gridRow'] = i+1
                document.getElementById(`btn${mat[i][j]}`).style['gridColumn'] = j+1
            }
        }

}