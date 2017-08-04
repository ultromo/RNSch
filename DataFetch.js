var Data;

var Feed;

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

var feedInvalidated = true

var loadFeed = function(){
	if (feedInvalidated == true){
		busywait(500);
		Feed = [["Master Jhew Hay Cong, 4D", "by Mr Cancerous McCancerFace", "Commendable behaviour! Autism observed.", "1 JANUARY 2017", 69, "http://cdn.history.com/sites/2/2015/02/golden-gate-bridge-iStock_000019197672Large-H.jpeg"], ["Jaster Hew Cay Mong, 3D", "by Mr Mhang Zheisuo", "Commendable behaviour! Autism observed. Long good behaviour strings are truncated. Tap to view full string. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "31 DECEMBER 2016", 29, "https://timedotcom.files.wordpress.com/2017/01/170110_putinglasses.jpg?w=560"]]
		//data format: [[Student, Teacher, Commendation, Time, UnixTime], ..]
		feedInvalidated = false
	}
}

var getFeed = function(){
	if (feedInvalidated == true){
		loadFeed()
	}
	return Feed
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
exports.getFeed = getFeed
exports.loadData = loadData
exports.loadFeed = loadFeed
