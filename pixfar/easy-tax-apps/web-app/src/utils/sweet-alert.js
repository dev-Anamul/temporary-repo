export class SweetAlert {
  constructor(swal) {
    this.swal = swal;
  }

  deleteConfirmation(callback) {
    this.swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this record!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) callback();
    });
  }
}
