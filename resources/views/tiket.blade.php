<!DOCTYPE html>
<html lang="en">
<head>
  <title>Create Ticket</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
  <script src="{{ asset('assets/js/tiny-mce.js') }}" referrerpolicy="origin"></script>
  <script>

    tinymce.init({
      selector: ".subject-description",
      plugins: "advlist autolink lists link charmap print preview hr anchor pagebreak",
      toolbar_mode: "floating",
      height : "420"

    
    });
  </script>
</head>
<body>
 
<div class="container">

  @if (session('success'))
    <div class="alert alert-success" id="success-alert" style="width: 40%;">
        {{ session('success') }}
    </div>

    <script>
        setTimeout(function() {
            document.getElementById('success-alert').style.display = 'none';
        }, 5000);
    </script>
  @endif


  @if (session('error'))
    <div class="alert alert-danger">
        {{ session('error') }}
    </div>
  @endif
  <h2>Create Ticket</h2>
  <form class="bg-white border-top border-3 border-success p-3" method="POST" action="{{ route('tiket.store') }}" enctype="multipart/form-data">
    @csrf
    <div class="form-group">
        <label for="cars">Choose a Client:</label>
        <select class="form-control" name="user_id" id="cars">
        @foreach ($clients as $item)
            
        <option value="{{ $item->user_id }}" @if ($item->company_name === 'Greene Technology') @selected(true) @endif >{{ $item->company_name }}</option>

        @endforeach
          
        </select>
        @if ($errors->has('user_id'))
        <div class="text-danger">
            {{ $errors->first('user_id') }}
        </div>
        @endif
    </div>
    
    <div class="form-group">
      <label for="email">Ticket Subject:</label>
      <input type="text" class="form-control" id="ticket_subject" placeholder="Ticket Subject" name="ticket_subject" value="{{old('ticket_subject')}}">
      @if ($errors->has('ticket_subject'))
      <div class="text-danger">
          {{ $errors->first('ticket_subject') }}
      </div>
      @endif
    </div>
    
    <div class="form-group">
        <label for="comment">Description:</label>
        <textarea class="form-control subject-description" rows="5" id="comment" name="description" placeholder="Description">{{old('description')}}</textarea>
        @if ($errors->has('description'))
        <div class="text-danger">
            {{ $errors->first('description') }}
        </div>
        @endif
    </div>
    
    <div class="form-group">
        <label for="pwd">Upload File:</label>
        <input type="file" class="form-control" id="ticket_file"  name="ticket_file">
        @if ($errors->has('ticket_file'))
        <div class="text-danger">
            {{ $errors->first('ticket_file') }}
        </div>
        @endif
    </div>
    
    <button type="submit" class="btn btn-success">Save</button>
  </form>
</div>

</body>
</html>
