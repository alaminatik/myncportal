<!DOCTYPE html>
<html lang="en">
<head>
  <title>Create Ticket</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Create Ticket</h2>
  <form action="/action_page.php">
    <div class="form-group">
        <label for="cars">Choose a Client:</label>
        <select class="form-control" name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
    </div>
    <div class="form-group">
      <label for="email">Name:</label>
      <input type="text" class="form-control" id="name" placeholder="Enter name" name="name">
    </div>
    <div class="form-group">
        <label for="pwd">Title:</label>
        <input type="text" class="form-control" id="pwd" placeholder="Enter Title" name="title">
    </div>
    <div class="form-group">
        <label for="comment">Description:</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
    </div>
    
    
    <button type="submit" class="btn btn-success">Save</button>
  </form>
</div>

</body>
</html>
