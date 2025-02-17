<?php

namespace App\Http\Controllers;

use App\Models\ClientDetail;
use App\Models\TicketReply;
use App\Models\Tiket;
use App\Models\TiketFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class TiketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data['clients'] = ClientDetail::where('company_name','!=', NULL)->get(); 

        return view('tiket',$data);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate([
            'user_id' => "nulable",
            'ticket_subject' => "nulable",
            'description' => "nulable",
        ]);

        // for ticket
        $ticket = new Tiket();
        $ticket->ticket_number = 1;
        $ticket->company_id = 1;
        $ticket->user_id = $request->user_id;
        $ticket->subject = $request->ticket_subject;
        $ticket->status = 'open';
        $ticket->priority = 'low';     
        $ticket->save();

         // for ticket description
         $ticketDescription = new TicketReply();
         $ticketDescription->ticket_id  = $ticket->id;
         $ticketDescription->user_id   = $request->user_id;
         $ticketDescription->message = $request->description;            
         $ticketDescription->save();

         // for ticket file

         $ticketFile = new TiketFile();

          if ($request->ticket_file) {
            try {
                 $extension = $request->img->getClientOriginalExtension();
                 $request->img->getClientOriginalName();
                 
                 $img_name = str_replace(array(' ','/'),array('_',''),''.time(). '.' .$extension);
                 $img_path = env('upload_user_file').'uploaded-docs/files/';
                 $data['file_path'] = $img_src = 'uploaded-docs/apifiles/' . $img_name;
                 $data['file_name'] = $img_name;

                 $request->img->move($img_path, $img_name);
                 $ticketFile->filename = $img_name;
                 
            } catch (\Exception $e) {
  
                Log::info('error'.$e->getMessage());
            }
  
             
          }


         
         $ticketFile->ticket_reply_id  = $ticketDescription->id;
         $ticketFile->user_id   = $request->user_id;          
         $ticketFile->save();

    }

    /**
     * Display the specified resource.
     */
    public function show(Tiket $tiket)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tiket $tiket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tiket $tiket)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tiket $tiket)
    {
        //
    }
}
