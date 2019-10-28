// @ts-ignore
app.controller("chatController", [
  "$scope",
  $scope => {
    $scope.activeTab = 1;

    $scope.changeTab = tab => {
      $scope.activeTab = tab;
    };

    // @ts-ignore
    const socket = io.connect("http://localhost:3000");
  }
]);
