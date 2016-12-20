==============================================
JQuery dependency fields
==============================================

Select list dependency fields

# Installation steps:
1- Include jQuery library at your head or before </body> tag.
2- Include scripts.js after jQuery library.


# Usage:
At the field you want (child) to set it depend on other field (parent), do the following:
1- Add **depend-on** attribute at select tag, and it should equal parent id.
2- At every option of your child field add **dependency-value** attribute and it should equal the value of the parent field which is the child options target it.

```
<label for="parent">Parent</label>
<select name="parent" id="parent" class="form-control">
	<option value="">-- Select--</option>
	<option value="parent_1">Parent option 1</option>
	<option value="parent_2">Parent option 2</option>
	<option value="parent_3">Parent option 3</option>
	<option value="parent_4">Parent option 4</option>
</select>

<label for="child">Child</label>
<select name="child" id="child" class="form-control" depend-on="parent">
	<option value="">-- Select--</option>
	<option value="1" dependency-value="parent_1">Child option 1 (parent_1)</option>
	<option value="2" dependency-value="parent_1">Child option 2 (parent_1)</option>
	<option value="3" dependency-value="parent_1">Child option 3 (parent_1)</option>
	<option value="4" dependency-value="parent_1">Child option 4 (parent_1)</option>
</select>
```