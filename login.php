<?php
    include 'header.php'
?>

<div class="container">
    <div class="page-header"></div>

    <div class="bs-docs-section clearfix">
        <div class="row">
            <div class="col-lg-6">
                <form class="form-horizontal" action="authenication.php" method="POST">
        <fieldset>
            <legend>LOG IN / REGISTER</legend>
            <div class="form-group">
                <label for="inputEmail" class="col-lg-2 control-label">Email</label>
                <div class="col-lg-10">
                    <input type="text" class="form-control" id="inputEmail" name="inputEmail" placeholder="Email">
                </div>
            </div>
            <div class="form-group">
                <label for="inputPass" class="col-lg-2 control-label">Password</label>
                <div class="col-lg-10">
                    <input type="password" class="form-control" id="inputPassword" name="inputPassword" placeholder="Password">
                </div>
            </div>
            <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>

        </fieldset>
    </form>
            </div>

        </div>
    </div>
</div>