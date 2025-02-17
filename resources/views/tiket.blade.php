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
        <select class="form-control" name="user_id" id="cars">
        @foreach ($clients as $item)
            
        <option value="{{ $item->user_id }}" @if ($item->company_name === 'Greene Technology') @selected(true) @endif >{{ $item->company_name }}</option>

        @endforeach
          
        </select>
    </div>
    <div class="form-group">
      <label for="email">Ticket Subject:</label>
      <input type="text" class="form-control" id="ticket_subject" placeholder="Ticket Subject" name="ticket_subject">
    </div>
    
    <div class="form-group">
        <label for="comment">Description:</label>
        <textarea class="form-control" rows="5" id="comment" name="description" placeholder="Description"></textarea>
    </div>
    <div class="form-group">
        <label for="pwd">Upload File:</label>
        <input type="file" class="form-control" id="ticket_file"  name="ticket_file">
    </div>
    
    <button type="submit" class="btn btn-success">Save</button>
  </form>
</div>

</body>
</html>
