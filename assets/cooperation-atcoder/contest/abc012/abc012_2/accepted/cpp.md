# AtCoder Beginner Contest 012
## B - 入浴時間
```cpp
#include <iomanip>
#include <iostream>

using namespace std;

int main() {
    int n;
    cin >> n;
    cout << setw(2) << setfill('0') << n / 3600 << ":";
    cout << setw(2) << setfill('0') << n % 3600 / 60 << ":";
    cout << setw(2) << setfill('0') << n % 60 << endl;
}
```
