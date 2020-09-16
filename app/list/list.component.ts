import { Component, OnInit } from "@angular/core";
import { Grocery } from "../shared/grocery/grocery.model";
import { GroceryService } from "../shared/grocery/grocery.service";

@Component({
  selector: "gr-list",
  moduleId: module.id,
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
  providers: [GroceryService]
})
export class ListComponent implements OnInit {
  groceryList: Array<Grocery> = [];

  constructor(private groceryService: GroceryService) {}

  ngOnInit() {
    this.groceryService.load()
      .subscribe((loadedGroceries: []) => {
        loadedGroceries.forEach((groceryObject: Grocery) => {
          this.groceryList.unshift(groceryObject);
        });
      });
  }
}