package
{
	import flash.display.MovieClip;

	public class idea extends MovieClip
	{

		private var select:Boolean;

		public function idea(x:Number, y:Number)
		{
			// constructor code
			select = false;
			this.x = x;
			this.y = y;
		}

		public function isSelected():Boolean
		{
			return select;
		}

		public function makeSelected(s:Boolean)
		{
			select = s;
		}

	}

}