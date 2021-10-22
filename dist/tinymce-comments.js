
var html="";
var id_index = 0;

tinymce.initComment = () =>{

  tinymce.init({
    menubar: false,
  
  selector: 'textarea.contant_turkish#contant_turkish',
  toolbar: 'customInsertButton customDateButton',
  setup: function (editor) {
  
    editor.ui.registry.addButton('customInsertButton', {
      text: 'Comment',
      onAction: function (_) 
      {
  
        tinymce.EditorManager.get('contant_turkish').focus();
  
        if(tinymce.activeEditor.selection.getContent().search('class="editable"')!= -1)
          {
            alert('This type of comment is not permitted !');
            return;
          }
  
        var deger = prompt('Leave a comment:');
        var cakisma = 0 ;
     
          try {
  
              dom_doc = $(tinymce.activeEditor.selection.getContent());
              for(i=0;i<dom_doc.length;i++)
              {
                if(dom_doc[i].tagName == null)
                {
  
                }
              else
              {
                tag_parse = dom_doc[i].tagName.split("");
                if(tag_parse[0] == 'H' || tag_parse[0] == 'P' || dom_doc[i].tagName == 'DIV')
                {
                  cakisma =1;
                  break;
                }
              }
  
            }
          } catch (error) {
            
          }
       
  
        if(deger != null && cakisma == 0)
        {
          //editor.insertContent('<span  class="editable" id="comment" lang="'+deger+'">'+tinymce.activeEditor.selection.getContent()+'</span>');
  
  
        var el = tinymce.activeEditor.dom.create('span', {id: 'editable-'+id_index, 'class': 'editable','lang':deger},String(tinymce.activeEditor.selection.getContent())  );
        tinymce.activeEditor.selection.setNode(el);
        id_index+=1;
        
        }
        else
        {
          if(cakisma == 1)
          {
            alert('This type of comments are not permitted !');
          }
          return;
        }
        $("iframe").contents().find("body").attr("contenteditable","false");
   
      }
    });
  
  },
  init_instance_callback: function (editor) {
    editor.on('click', function (e) {
      tinymce.EditorManager.get('contant_turkish').focus();
  
  
  
   try {
    if(e.target.className == 'editable')
              {
                if(e.target.tagName =='SPAN' && e.target.className =="editable" &&  e.target.className != null)
                {
                  if(confirm('Current comment:  '+e.target.lang+'\n'+'Do you want to delete it ?'))
                  {
                    e.target.outerHTML = e.target.innerHTML;
                  }
          
              
                }
              }
  
              else if(e.target.parentElement.className == 'editable')
              {
                if(e.target.parentElement.tagName =='SPAN' && e.target.parentElement.className =="editable" &&  e.target.parentElement != null )
                {
                  if(confirm('Current comment:  '+e.target.parentElement.lang+'\n'+'Do you want to delete it ?'))
  
                  {
  
                    e.target.parentElement.outerHTML= e.target.parentElement.innerHTML;
                  }
          
                }
  
              }
  
              else if(e.target.parentElement.parentElement.className == 'editable')
              {
                if(e.target.parentElement.parentElement.tagName =='SPAN' && e.target.parentElement.parentElement.className =="editable" &&  e.target.parentElement.parentElement != null )
                {
                  if(confirm('Current comment:  '+e.target.parentElement.parentElement.lang+'\n'+'Do you want to delete it ?'))
                  {
                    e.target.parentElement.parentElement.outerHTML= e.target.parentElement.parentElement.innerHTML;
                  }
                
                }
  
              }
  
                
              else if(e.target.parentElement.parentElement.parentElement.className == 'editable')
              {
                if(e.target.parentElement.parentElement.parentElement.tagName =='SPAN' && e.target.parentElement.parentElement.parentElement.className =="editable" &&  e.target.parentElement.parentElement.parentElement != null )
                {
                  if(confirm('Current comment:  '+e.target.parentElement.parentElement.parentElement.lang+'\n'+'Do you want to delete it ?'))
  
                  {
                    e.target.parentElement.parentElement.parentElement.outerHTML= e.target.parentElement.parentElement.parentElement.innerHTML;
  
                  }
  
                }
  
              }
      } catch (error) {
      
      }
      $("iframe").contents().find("body").attr("contenteditable","false");
  
  });
  },
  content_style: '.comments{  display:none;}.editable{background-color:yellow;opacity:0.6}.editable:hover{background-color:red;opacity:0.6} em{z-index:-1;}b{z-index:-1;}sup{z-index:-1;}sub{z-index:-1;}'
  });
}