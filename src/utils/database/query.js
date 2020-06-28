
function querySQLite({db, query, params}){
    return new Promise((resolve, reject) => {
        db.transaction(
            tx => {
              tx.executeSql(query, params, (_, { rows }) =>
                {
                  resolve(JSON.stringify(rows))
                }
              );
            },
            (e) => {
              console.log(e.message);
            }
          );
        
    })
}


module.exports =  {
  querySQLite
}


