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
      height : "330"

    
    });
  </script>

<style>
  
  .upload-container {
      width: 300px;
      height: 200px;
      border: 2px dashed #ccc;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;
  }
  .upload-container.dragover {
      border-color: #000;
  }
  #preview {
      margin-top: 20px;
      margin-bottom: 20px;
  }
  #preview img {
      max-width: 100%;
      max-height: 200px;
  }
</style>

</head>
<body>
<header class="sticky-top d-flex justify-content-center align-items-center login_header bg-white px-4" style="
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    box-shadow: 0 1px 0 0 #e8eef3;
    padding: 12px 0;">
  <img class="mr-2 rounded" style="border-style: none;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-radius: .25rem !important;
    max-height: 32px;" src="https://myncportal.com/user-uploads/app-logo/faf3fb1b78437fafae80ddf90162daa8.png" alt="Logo">
  <h3 class="mb-0 pl-1 " style="color: #28313c;
    font-size: 21px;
    font-weight: 400;
    padding-left: 1.25rem !important;
    margin-top: 9px;">Nochallenge</h3>
</header>
<div style="background: #e8eef3;padding-bottom: 12rem !important;padding-top: 6rem !important;">
  @if (session('success'))
      <div class="alert alert-success" id="success-alert" style="width: 54%;margin-left: 23%;">
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

  <div class="container" style="background: white;
    width: 55%;
    padding-bottom: 30px;
    padding-left: 30px;
    padding-right: 30px;border-radius: .25rem !important;">
  
    
    <h2 style="text-align: center;">Create Ticket</h2>
    <form class="bg-white border-top border-3 border-success p-3" method="POST" action="{{ route('tiket.store') }}" enctype="multipart/form-data" >
      @csrf
      <div class="form-group">
          <label for="cars">Client</label>
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
        <label for="email">Project Name / Url</label>
        <input type="text" class="form-control" id="ticket_subject" placeholder="Project Name / Url" name="ticket_subject" value="{{old('ticket_subject')}}">
        @if ($errors->has('ticket_subject'))
        <div class="text-danger">
            {{ $errors->first('ticket_subject') }}
        </div>
        @endif
      </div>
      <div class="form-group">
        <label for="cars">Project Priority</label>
        <select class="form-control" name="priority">
          <option value="low" {{ old('priority') === 'low' ? 'selected' : '' }}>Low</option>
          <option value="medium" {{ old('priority') === 'medium' ? 'selected' : '' }}>Medium</option>
          <option value="high" {{ old('priority') === 'high' ? 'selected' : '' }}>High</option>
          <option value="urgent" {{ old('priority') === 'urgent' ? 'selected' : '' }}>Urgent</option>
        </select>
        @if ($errors->has('priority'))
        <div class="text-danger">
            {{ $errors->first('priority') }}
        </div>
        @endif
      </div>
      
      <div class="form-group">
          <label for="comment">Description</label>
          <textarea class="form-control subject-description" rows="5" id="comment" name="description" placeholder="Description">{{old('description')}}</textarea>
          @if ($errors->has('description'))
          <div class="text-danger">
              {{ $errors->first('description') }}
          </div>
          @endif
      </div>
      <label for="comment">Upload File</label>
      <div class="upload-container" id="dropzone">
        <p>Drag and drop an image here or click to upload.</p>
      </div>
      <input type="file" id="fileInput" name="image" style="display: none;" accept="image/*">
      <input type="hidden" name="_token" value="{{ csrf_token() }}">
      <div id="preview"></div>

      <button type="submit" class="btn btn-primary">Submit Ticket</button>
    </form>
  </div>
</div>

</body>
</html>
<script type="text/javascript">
    const dropzone = document.getElementById('dropzone');
    const fileInput = document.getElementById('fileInput');
    const preview = document.getElementById('preview');


    dropzone.addEventListener('dragover', (e) => {
      // console.log('Dragover event fired');
        e.preventDefault();
        dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      
        e.preventDefault();
        dropzone.classList.remove('dragover');
        const file = e.dataTransfer.files[0];
        // console.log('Drop event fired',file);
        if (file.length > 0) {
            let dataTransfer = new DataTransfer();
            dataTransfer.items.add(files[0]); // Add file manually
            fileInput.files = dataTransfer.files; // Assign files to input
        }
        handleFile(file);
    });

    dropzone.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleFile(file);
    });



    function handleFile(file) {
        if (file && file.type.startsWith('image/')) {
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;

            const reader = new FileReader();
            reader.onload = (e) => {
                preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please upload a valid image file.');
        }
    }


</script>