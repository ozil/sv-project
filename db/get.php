<?php

header('Content-type: application/json');

require_once('/db.php');

$action= $_GET["action"];

switch ($action) {
    case "get_class_view":
        get_class_view($db);
        break;
    case "get_all_classes":
        get_all_class($db);
        break;
    case "get_all_buildings":
        get_all_buildings($db);
        break;
    case "get_building_view":
        get_building_view($db);
        break;
}

function get_class_view($db) {
    $classId= $_GET["class_id"];
    $query= "SELECT * FROM classes WHERE class_id = '$classId'";
    $results = mysqli_query($db, $query);
    $fetched_data = array();
    while ($row = mysqli_fetch_array($results)){
        $fetched_data[] = $row;
    }
    echo json_encode($fetched_data);
}

function get_all_class($db) {
    $floor_id= $_GET["floor_id"];
    $building_id= $_GET["building_id"];
    $query= "SELECT * FROM classes WHERE floor_id = '$floor_id' and building_id = '$building_id'";
    $results = mysqli_query($db, $query);
    $fetched_data = array();
    while ($row = mysqli_fetch_array($results)){
        $fetched_data[] = $row;
    }
    echo json_encode($fetched_data);
}

function get_all_buildings($db) {
    $query= "SELECT * FROM buildings";
    $results = mysqli_query($db, $query);
    $fetched_data = array();
    while ($row = mysqli_fetch_array($results)){
        $fetched_data[] = $row;
    }
    echo json_encode($fetched_data);
}

function get_building_view($db) {
    $building_id= $_GET["building_id"];
    $query= "SELECT * FROM buildings WHERE building_id = '$building_id'";
    $results = mysqli_query($db, $query);
    $fetched_data = array();
    while ($row = mysqli_fetch_array($results)){
        $fetched_data[] = $row;
    }
    echo json_encode($fetched_data);
}
?>