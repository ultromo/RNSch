var Data;

var busywait = function(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) {
  }
}

var getClassList = function(){
  if (dataInvalidated == true){
    loadData()
  }
  return Data[0]
}

var getClass = function(i){
  if (dataInvalidated == true){
    loadData()
  }
  return Data[1][i]
}

var getProfiles = function(i){
  if (dataInvalidated == true){
    loadData()
  }
  return Data[2][i]
}

var getGB = function(i){
  if (dataInvalidated == true){
    loadData()
  }
  return Data[3][i]
}

var dataInvalidated = true

var authenticationKey = "SMAULMAULTAUL"

var loadData = function(){
  if (dataInvalidated == true){
    //simulated load data, server stuff not implemented yet
    //ideally we should be able to replicate changes made on server side quickly
    busywait(500);
    Data = [["Autism", "Down Syndrome", "Cancer", "OK Can Sir"], [["Lol", "Hi"], ["Ok"], ["Is"], ["And"]], [[["Commendations: 0", "Warning Slips: 9001", "Alternate Names: \"John Cena\""], ["Commendations: 0", "Warning Slips: 9001"]], [["Commendations: 0", "Warning Slips: 9002"]], [["Commendations: 0", "Warning Slips: 9003"]], [["Commendations: 0", "Warning Slips: 9004"]]], [[["Lol is an autistic boy"], ["Hi has down syndrome"]], [["Ok is ... okay"]], [["And is ... prepositional"]], [["Is is... Istastic"]]]]
    //data format: [[CLASSLIST:CLASS,...],[STUDENTLISTS:[CLASS:STUDENT,...],...],[STUDENTPROFILELISTS:[CLASSPROFILELIST:[STUDENTPROFILEDATA:DATAPOINT,...],...],...],[STUDENTGBLISTS:[CLASSGBLIST:[STUDENTGBDATA:DATAPOINT,...],...],...]]
    dataInvalidated = false
  }
}

//conditions under which data is invalidated:
//1) if we haven't implemented in-place data modification ie we modify student profiles directly when teachers make changes on their devices
//2) how do we propagate changes in react again? my skill level too low

var exports = module.exports = {}
exports.getClassList = getClassList
exports.getClass = getClass
exports.getProfiles = getProfiles
exports.authenticationKey = authenticationKey
exports.dataInvalidated = dataInvalidated
exports.getGB = getGB