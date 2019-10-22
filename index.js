async function showDataFromAPI() {  
  const response = await fetch('http://localhost:3000/api');
      const data = await response.json();
      const result = data.data;
      console.log(result)
    
      //retrieve bands array from each object
    const map1 = result.map(object => {
      if (object.bands){
        const bandsArray = object.bands.map(band => {
              return band.recordLabel
            })
        return bandsArray
      }
    })
     //merge all array in one 
    const recordLabelsInOneArray = Array.prototype.concat.apply([], map1)

    //delet duplicate
    const uniqueArray = Array.from(new Set(recordLabelsInOneArray))
     
    const uniqueArrayWithoutemptyItem = uniqueArray.forEach((item,i) => {
      if (item == "") {
        uniqueArray[i]= "There Is No recordLabel"
      } 
    })

    //sort 
    const sortedArrayOfrecordLabel = uniqueArray.sort()
    

    const filteredArrayOfRecordLabelsObjects  = (value) =>{
      result.filter((object) => {object.bands.filter(item => {if (item.recordLabel === value) {
        const bandName = item.name
        var liLevel2 = document.createElement("LI");
        liLevel2.setAttribute("id", "level2");
        var textLevel2 = document.createTextNode(`Band name : ${bandName}`);
        liLevel2.appendChild(textLevel2);
          list.appendChild(liLevel2)}
          return bandName = item.name
        }
          )
          result.filter((object) => {object.bands.filter(item => {if(item.name === bandName){
            const festival = object.name
          var liLevel3 = document.createElement("LI");
          liLevel3.setAttribute("id", "level3");
          var textLevel3 = document.createTextNode(`Festival : ${festival}`);
          liLevel3.appendChild(textLevel3);
            list.appendChild(liLevel3)
              }})
            }
          )
        }
      )    
    }
        

    const list = document.querySelector("#ul1")
    
    const displaytoplevel = 
    sortedArrayOfrecordLabel.forEach(item => {
      var x = document.createElement("LI");
      var t = document.createTextNode(`Record Label : ${item}`);
        x.appendChild(t);
        list.appendChild(x)
      
      filteredArrayOfRecordLabelsObjects(item)
        })
    }
    const WholeData = showDataFromAPI();
    