package
{
	import flash.display.MovieClip;

	public class idea extends MovieClip
	{

		private var select:Boolean;
		private var hasImage:Boolean;

		public function idea(x:Number, y:Number)
		{
			// constructor code
			select = false;
			hasImage = false;
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
		
		public function isImageThere():Boolean
		{
			return hasImage;
		}

		public function makeImageHappen(s:Boolean)
		{
			hasImage = s;
		}

	}

}