/* GET homepage */
const index = (req,res) =>{
  res.render('index', {title: 'Travlr Getways'});
}

module.exports = {
  index
};